Readability
===========
Automated Readability Index, Flesch-Kincaid, Gunning-Fog, SMOG Index, Coleman-Liau

Examples
========
**Automated Readability Index**  
``` javascript
automatedReadability("I immediately regret this decision.");
Characters: 30
Words: 5
Sentences: 1
Automated Readability Index: 9.329999999999998
```

**Flesch Kincaid Ease**  
``` javascript
fleschKincaidEase("I’ll have a Manhattan. And kick the vermouth to the side with a pair of steel-toed boots.");
Total Words: 17
Total Sentences: 2
Total Syllables: 21
Flesch Kincaid Reading Ease: 93.70161764705884```

**Flesch Kincaid Grade Level**  
``` javascript
fleschKincaidGradeLevel("He had a voice that could make a wolverine purr and suits so fine they made Sinatra look like a hobo.");
Total Words: 21
Total Sentences: 1
Total Syllables: 26
Flesch Kincaid Grade Level: 7.209523809523812```

**Gunning Fog Score**  
``` javascript
gunningFog("I love scotch. Scotchy scotch scotch. Here it goes down, down into my belly.");
Total Words: 14
Total Sentences: 3
Total Complex Words: 0
Gunning Fog Score: 1.866666666666667```    

**SMOG Index**  
``` javascript
smogIndex("Oh, I can barely lift my right arm ’cause I did so many. I don’t know if you heard me counting. I did over a thousand.");
Number of Sentences: 3
Polysyllabic Words: 1
SMOG index: 3.7792166259557014```

**Coleman-Liau Index**  
``` javascript
colemanLiau("Discovered by the Germans in 1904, they named it San Diego, which of course in German means ‘a whale’s vagina.");
Total Characters: 86
Total Words: 20
Total Sentences: 1
Coleman Liau Index: 9.511999999999997```