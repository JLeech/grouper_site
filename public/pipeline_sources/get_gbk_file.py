#!/usr/bin/env python
from Bio import Entrez
from Bio import SeqIO

import redis

import sys
import os
import shutil

Entrez.email = "ipoverennaya@gmail.com"     # Always tell NCBI who you are

genes_list = sys.argv[1]
gene_folder = sys.argv[2]

load_id = os.path.basename(genes_list)

rediska = redis.StrictRedis()

f = open(genes_list, 'r')
lines = f.readlines()
f.close()

gbks_count = len(lines)
gene_locations = {}
# {locus_name: [start,end]}
for line in lines:
    a, b, c = line.split()
    gene_locations[a] = [b, c]

for idx, locus_name in enumerate(gene_locations):
    start = gene_locations[locus_name][0]
    end   = gene_locations[locus_name][1]
    handle = Entrez.efetch(db = "nucleotide", 
                           id = locus_name,
                           rettype = "gb",
                           seq_start = start, 
                           seq_stop = end)
    records = SeqIO.parse(handle, "genbank")
    
    for seq_record in records:
        organism_name = "_".join(seq_record.description.split()[:2])
        output_filename = gene_folder + '/' + organism_name + '.gbk'
        SeqIO.write(seq_record, output_filename, "genbank")
    rediska.set(load_id, 'step: 2/5. loaded GBKS: ' + str(idx) +'/' + str(gbks_count) )
print "Well done!"
