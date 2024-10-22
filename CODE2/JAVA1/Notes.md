## Date:-18-10-2024(Friday)

# Syllabus:-

- Operator
- Flow Control
- Switch case
- Loop

#################

- Pattern Program
- number Program
- Recursion
- Bitwise operator
- Array
- String
- LeetCode/HackerRank

# Operator:-

- Arithemtic operators :- Arithemtic operators are used to perform Arithmetic opertion they are +,-,\*,/,%.

e.g., sop(34/12):-2,
sop(15.0/2):-7.5
sop(8/12):-0

- Assignment Operator:-
  Equal '=' is used assignment operator and where jvm operates the stmt from right to left.

e.g., int n=12+18;
sop(n); o/p:-30
{ int x=927;
x=x%10;
sop(x); }o/p:-7

- Compound Assignment operator:-
  Combination of two operators are called compound assignment operator.
  like:-+=,-=,\*=,/=,%=

e.g., int x=30;
x+=43;
sop(x); o/p:-73
int y=90;
y \*= 5;
sop(y); o/p:450

int z=80;
z/=12;
sop(z); o/p:-6

- Increment/Decrement operator:-
  Inc/Dec is used to increase or decrease the original value of a variable by one.

  a.Post inc/Dec:-
  X++;X--;
  First value will be be displayed then it will be inc/dec by one(1) at memory;

  b.Pre Inc/Dec:-
  ++X,--X;
  First value will be increase or decrease by one(1) at memory and then updated value be displayed.

  e.g., Post Inc/Dec:-

  int x=10;
  sop(x++); o/p:-10
  sop(x); o/p:-11
  sop(x--); o/p:-11
  sop(x); o/p:- 10

  Pre Inc/Dec:-

  int a= 10;
  sop(++a); o/p:-11
  sop(a); o/p:-11
  sop(--a); o/p:-10
  sop(a); o/p:-10

  # Date:- 21-10-2024(Monday)

1. int x=10;
   int y= x++;
   sop(x);//11
   sop(y);//10

2. int x=10;
   int y=++x;
   sop(x);//11
   sop(y);//11

# Relational Operator:-

Reletional operators are uesd to compair two number after that it gives boolean result ,
They are:

> ,=>,<=,!=
> ,<

e.g., int x=64;
int y= 20;
int z= 1900;
sop(x+y>y\*3);//true
sop((x+y)/7==0);//false
sop(z%100!=0);//false
sop((x+y)/7!==0);//true
sop(045>100);//false

# Date:-22-10-2024(Tuesday).

# Number Representation number:- An integer number can Representated in four different ways

1. Binary
2. Octal
3. Decimal
4. Hexadecimal




1. Binary Representation:- If a number is written by using only two digits 0,1 then it is called Binary Representation.

A Binary number starts 0B or 0b and written as 2's Complement form.

e.g:- 0b10101011;
0B101011010;
0b101024; not right.




2. Octal Representation:- If a number is written by using 8 digits from 0-7 then it is called Octal Representation.
An Octal start from 0 and it is written in 8's Complement form.

e.g.,:-(0354)base 8
      (0358) base 8 ; not right.

3. Decimal Representation:- If a number is not prefix by anything  it is called  a Decimal number.
A Decimal number is written in 10's Complement .

4. Hexadecimal :- If a number is prefix by 0X or 0x then it is called a Hexadecimal number.
If  Hexadecimal number 16 digits are used from 0-9 & A-F.
Hexadecimal number is written in 16's Complement form.
eg., 0x325 base 16 = 805 base 10;


# Logical Operator:- 
Logical operates are used to take boolean value and gives boolean result.
They are Logical AND(&&) ,Logical OR (||),Logical NOT(!).

1. Logical AND:- It takes two boolean operand  if both are true then it gives true otherwise it will give false.
true-true:true, otherwise all result false.

& :- Strictly checked both operand.it will execute both operands to give result.

&&:-it will execute 2nd operand only if 1st is true.