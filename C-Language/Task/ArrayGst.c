#include <stdio.h>
int main(){

float price[4];

printf("First item Price: ");
scanf("%f",&price[0]);

printf("Second item Price: ");
scanf("%f",&price[1]);

printf("Third item Price: ");
scanf("%f",&price[2]);


printf("Final Price of First Item is: %f\n",price[0]+(0.18*price[0]));

printf("Final Price of Second Item is: %f\n",price[1]+(0.18*price[1]));

printf("Final Price of Third Item is: %f\n",price[2]+(0.18*price[2]));

    return 0;
}