#include <stdio.h>
int main(){

printf("%d\n",!(7>9)&&8>4);//return 1
printf("%d\n",!(7>9)||8>8);// return 1
printf("%d\n",!(7>9)==8>4);// return 1
printf("%d\n",9>=9&&!(8>4));// return 0
printf("%d\n",7>9||!(8>4));// return 0
    return 0;
}