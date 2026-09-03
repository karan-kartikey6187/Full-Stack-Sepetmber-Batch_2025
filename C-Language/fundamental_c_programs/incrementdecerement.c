#include <stdio.h>
int main(){


int a=34;
int b=26;

a--;
b--;
++b;
b=b++;
printf("%d",b);
b++;
++a;
a--;
printf("a is:%d\nb is:%d",++a,b++);

return 0;
}