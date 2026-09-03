#include <stdio.h>
int main()
{
  // print number between number given by user
  int start, endnum;

  printf("Enter start number: ");
  scanf("%d", &start);

  printf("Enter end number: ");
  scanf("%d", &endnum);

  if (start < endnum)
  {
    for (int i = start; i <= endnum; i++)
    {
      printf("%d\n", i);
    }
  }
  else
  {
    printf("Ener a vaid Number");
  }
  return 0;
}