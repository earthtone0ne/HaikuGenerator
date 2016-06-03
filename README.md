# HaikuGenerator
Generate a haiku poem from the command line.

Syntax:  node haiku line1 line2 .. lineX
Example: node haiku 5 3 5 3 5 1

Parameters are optional. If paramaters are not provided, the default poem structure is 5/7/5 syllables per line.
The user can request  line lengths up to 100 syllables; requests exceeding 100 are reverted to the default structure.
