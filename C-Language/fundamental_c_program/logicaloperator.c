#include <stdio.h>
int main(){
// Logical AND (&&) Returns true only if both the conditions on its sides are true.
printf("%d\n",4>5&&5>2);// return 0
printf("%d\n",6>5&&5>2);// return 1
// Logical OR (||) Returns true if either of the conditions is true.
printf("%d\n",8>5||5>7);//return 1
printf("%d\n",1>4||6>8);//return 0
 // logical NOT (!) Reverses the truth value of the condition.
printf("%d\n",!(9>4||6>8));// return 0
printf("%d\n",!(2>4||5>8));// return 1
printf("%d\n",!(5>4&&9>3));// return 0
printf("%d\n",!(7>4&&8>8));// return 1

    return 0;
}