#!/usr/bin/env python
from Bio import Entrez
from Bio import SeqIO

import redis

import sys
import os
Entrez.email = "ipoverennaya@gmail.com"     # Always tell NCBI who you are

rediska = redis.StrictRedis()

genes_list = sys.argv[1]
f_output_name = sys.argv[2]

load_id = os.path.basename(genes_list)

f = open(genes_list, 'r')
input_data = f.readlines()[1:]
f.close()

gene_ids = []
# example string:
# 9606  Homo sapiens    152330 0   live  CNTN4    AXCAM, BIG-2;...
for line in input_data:
    gene_ids.append(line.split('\t')[2])

gene_ids_length = len(gene_ids)
f_output = open(f_output_name, 'w')

for idx, gene_id in enumerate(gene_ids):
    handle = Entrez.efetch(db="gene", id=gene_id, rettype="gene_table", retmode="text")
    data = handle.read().split('\n')
    for line in data:
        splitted = line.split('from:')
        if len(splitted) > 1:
            id = splitted[0].split('(minus strand)')[0].split()[-1]
            start = splitted[1].split('to:')[0].strip()
            end = splitted[1].split('to:')[1].strip()
            if len(start.split()) > 1:
                start = start.split()[-1]
            if len(end.split()) > 1:
                end = end.split()[-1]
            if int(start) > int(end):
                start, end = end, start
    f_output.write(' '.join([id, start, end]) + '\n')
    rediska.set(load_id, 'step: 1/5. loaded genes: ' + str(idx) +'/' + str(gene_ids_length) ) 

f_output.close()