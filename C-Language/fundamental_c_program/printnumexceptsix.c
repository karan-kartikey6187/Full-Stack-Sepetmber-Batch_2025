#include <stdio.h>
int main(){
    // print all number for 1 to 10 except 6

for (int i = 1; i <=10; i++)
{
    if (i==6) //skip six
    {
       continue;
    }
    printf("%d\n",i);
}
    return 0;
}