#include <stdio.h>
int main(){

int a=4;
int b=2;
a+=b;// a=a+b, a=4+2 =6 
printf("%d\n",a);
// a=6
a-=b;// a=a-b, a=6-2 =4
printf("%d\n",a);
// a=4
a*=b;// a=a*b, a=4*2 =8
printf("%d\n",a);
// a=8

    return 0;
}