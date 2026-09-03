#include <stdio.h>
int main()
{
    int guessnum=9;
    int num;
    int count=1;
while (1)
{
    printf("Guess The Number: ");
    scanf("%d",&num);

if (guessnum==num)
{
    printf("Congratulations! you guessed the correct number in %d attempts.\n",count);
    break;
}
else
{
printf("Wrong Number Try Again!\n");
}
 count++;
}
    return 0;
}
