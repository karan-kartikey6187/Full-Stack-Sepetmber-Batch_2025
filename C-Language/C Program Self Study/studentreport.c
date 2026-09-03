#include <stdio.h>
int main()
{
    int student[3][5];
    int count = 1;
    int studenttotal[3]={0,0,0};
    int max;
    char studentname[3][50];
    int option,z;
    for (int i = 0; i < 3; i++)
    {
        printf("\n***************************************************************************\n");
        printf("Enter Student %d Name: ",count);
        scanf(" %[^\n]",&studentname[i]);
          
            printf("Enter Marks of %s in Hindi: ",studentname[i]);
            scanf("%d", &student[i][0]);

            printf("Enter Marks of %s in English: ",studentname[i]);
            scanf("%d", &student[i][1]);

            printf("Enter Marks of %s in Maths: ",studentname[i]);
            scanf("%d", &student[i][2]);

            printf("Enter Marks of %s in Science: ",studentname[i]);
            scanf("%d", &student[i][3]);

            printf("Enter Marks of %s in Computer: ",studentname[i]);
            scanf("%d", &student[i][4]);

        count++;

    }
    for (int i = 0; i < 3; i++)
   {
    for (int v= 0; v < 5; v++)
    { 
          studenttotal[i]+=student[i][v];
    }
     }

     for (int i = 0; i < 3; i++)
     {
        printf("Name: %s\n",studentname[i]);
        printf("Total Marks: %d\n",studenttotal[i]);
        printf("*************************************************************************************\n");
     }
     
     max=studenttotal[0];
    
    for (int i=1;i<3;i++){
        if(studenttotal[i]>max)
    {
       max=studenttotal[i];
    }
    }
    for (int i=0 ; i<3 ;i++)
    if(max==studenttotal[i])
    {
        printf("Topper Name : %s\t Marks: %d\n",studentname[i],max);
    }

    printf("\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");

    printf("\n1-Hindi Topper");
    printf("\n2-English Topper");
    printf("\n3-Maths Topper");
    printf("\n4-Science Topper");
    printf("\n5-Computer Topper\n");
   
    printf("\nSelect One Option: ");
    scanf("%d",&option);

    z=option-1;

        for (int i = 1; i < 3; i++)
        {
            max=student[0][z];

           if (student[i][z]>max)
              {
                max=student[i][z];
              }
        }
        for (int i = 0; i < 3; i++)
        {
            if (max==student[i][z])
            {
                switch (z)
                {
                case 0: printf("Hindi Topper: %s\n Marks: %d\n",studentname[i],student[i][z]);
                    break;
                case 1: printf("English Topper: %s\n Marks: %d\n",studentname[i],student[i][z]);
                    break;
                case 2: printf("Maths Topper: %s\n Marks: %d\n",studentname[i],student[i][z]);
                    break;
                case 3: printf("Science Topper: %s\n Marks: %d\n",studentname[i],student[i][z]);
                    break;
                case 4: printf("Computer Topper: %s\n Marks: %d\n",studentname[i],student[i][z]);
                    break;
                default: printf("\nYou Have Select Wrong Option\n");
                    break;
                }
                
            }
        }

    return 0;
}