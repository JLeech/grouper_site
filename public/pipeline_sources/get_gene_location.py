#!/usr/bin/env python
from Bio import Entrez
from Bio import SeqIO
import sys
import os
Entrez.email = "ipoverennaya@gmail.com"     # Always tell NCBI who you are

genes_list = sys.argv[1]
f_output_name = sys.argv[2]

f = open(genes_list, 'r')
input_data = f.readlines()[1:]
f.close()

gene_ids = []
# example string:
# 9606  Homo sapiens    152330 0   live  CNTN4    AXCAM, BIG-2;...
for line in input_data:
    gene_ids.append(line.split('\t')[2])
# 

f_output = open(f_output_name, 'w')

for gene_id in gene_ids:
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
    print "gene loaded"

f_output.close()