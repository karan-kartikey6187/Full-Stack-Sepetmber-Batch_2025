#include <stdio.h>
int main()
{
   int math, science, hindi, english, history;
   int count = 1;
   int sum;
   int stone, sttwo, stthree, stfour, stfive;
   int percentageone, percentagetwo, percentagethree, percentagefour, percentagefive;

   do
   {
      sum = 0;
      printf("student %d Enter Marks of Hindi: ", count);
      scanf("%d", &hindi);
      sum += hindi;
      printf("Student %d Enter Marks of english: ", count);
      scanf("%d", &english);
      sum += english;
      printf("Student %d Enter Marks of math: ", count);
      scanf("%d", &math);
      sum += math;
      printf("Student %d Enter Marks of science: ", count);
      scanf("%d", &science);
      sum += science;
      printf("Student %d Enter Marks of history: ", count);
      scanf("%d", &history);
      sum += history;

      printf("***********************************************************************************************\n");

      if (count == 1)
      {
         stone = sum;
      }

      if (count == 2)
      {
         sttwo = sum;
      }

      if (count == 3)
      {
         stthree = sum;
      }
      if (count == 4)
      {
         stfour = sum;
      }
      if (count == 5)
      {
         stfive = sum;
      }
      count++;

      percentageone = stone / 5;
      percentagetwo = sttwo / 5;
      percentagethree = stthree / 5;
      percentagefour = stfour / 5;
      percentagefive = stfive / 5;

   } while (count <= 5);

   if (percentageone >= 90)
   {
      printf("\n1st student A Grade and Percentage is %d\n", percentageone);
   }

   if (percentagetwo >= 90)
   {
      printf("2nd student A Grade and percentage is %d\n", percentagetwo);
   }

   if (percentagethree >= 90)
   {
      printf("3rd student A Grade and percentage is %d\n", percentagethree);
   }
   if (percentagefour >= 90)
   {
      printf("4rd student A Grade and percentage is %d\n", percentagefour);
   }
   if (percentagefive >= 90)
   {
      printf("5th student A Grade and percentage is %d\n", percentagefive);
   }

   //===================

   if (percentageone >= 75 && percentageone < 90)
   {
      printf("1st student B Grade and percentage is %d\n", percentageone);
   }

   if (percentagetwo >= 75 && percentagetwo < 90)
   {
      printf("2nd student B Grade and percentage is %d\n", percentagetwo);
   }

   if (percentagethree >= 75 && percentagethree < 90)
   {
      printf("3rd student B Grade and percentage is %d\n", percentagethree);
   }
   if (percentagefour >= 75 && percentagefour < 90)
   {
      printf("4rd student B Grade and percentage is %d\n", percentagefour);
   }
   if (percentagefive >= 75 && percentagefive < 90)
   {
      printf("5th student B Grade and percentage is %d\n", percentagefive);
   }

   //=========================================

   if (percentageone >= 50 && percentageone < 75)
   {
      printf("1st student C Grade and percentage is %d\n", percentageone);
   }

   if (percentagetwo >= 50 && percentagetwo < 75)
   {
      printf("2nd student C Grade and percentage is %d\n", percentagetwo);
   }

   if (percentagethree >= 50 && percentagetwo < 75)
   {
      printf("3rd student C Grade and percentage is %d\n", percentagetwo);
   }
   if (percentagefour >= 50 && percentagefour < 75)
   {
      printf("4rd student C Grade and percentage is %d\n", percentagefour);
   }
   if (percentagefive >= 50 && percentagefive < 75)
   {
      printf("5th student C Grade and percentage is %d\n", percentagefive);
   }

   //===========================================

   if (percentageone < 50)
   {
      printf("1st Fail and percentage is %d\n", percentageone);
   }

   if (percentagetwo < 50)
   {
      printf("2nd Fail and percentage is %d\n", percentagetwo);
   }

   if (percentagethree < 50)
   {
      printf("3rd Fail and percentage is %d\n", percentagethree);
   }
   if (percentagefour < 50)
   {
      printf("4th Fail and percentage is %d\n", percentagefour);
   }
   if (percentagefive < 50)
   {
      printf("5th Fail and percentage is %d\n", percentagefive);
   }
   return 0;
}