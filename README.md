Readability
===========
Automated Readability Index, Flesch-Kincaid, Gunning-Fog, SMOG Index, Coleman-Liau

### Examples
```
> const testPhrase = 'No kidding - Lorenzo called off his trip to visit Mexico City just because they told him the conquistadores were extinct.';
```
#### [Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index)
```
> Readability.automatedReadabilityIndex(testPhrase);
11.274285714285718
```
#### [SMOG Index](https://en.wikipedia.org/wiki/SMOG)
```
> Readability.SMOGIndex(testPhrase);
10.065306667255596
```
#### [Gunning Fog](https://en.wikipedia.org/wiki/Gunning_fog_index)
```
> Readability.gunningFog(testPhrase);
14.114285714285714
```
#### [Coleman Liau](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)
```
> Readability.colemanLiau(testPhrase);
11.952857142857141
```
#### [Flesch Kincaid](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)
```
> Readability.fleschKincaid(testPhrase);
{ ease: 52.57714285714289, gradeLevel: 11.142857142857142 }
```
