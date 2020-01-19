#!/usr/bin/python
# -*- coding: UTF-8 -*-

def readcourselist(filename):
    infile = open(filename,'r')
    L = []
    for line in infile:
        lines = line.strip()
        L.append(lines)
    infile.close()
    return L

def deleteenrolledcourse(result):
    L = readcourselist("courselist.txt")
    for i in result:
        if i in L:
            L.remove(i)
        if i == "MATH4A":
            L.remove("MATH3A")
            L.remove("MATH3B")
        if i == "CMPSC111":
            L.remove("CMPSC140")
        if i == "CMPSC140":
            L.remove("CMPSC111")
        if i == "CMPSC160":
            L.remove("CMPSC162")
        if i == "CMPSC162":
            L.remove("CMPSC160")
    return L