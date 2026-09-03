#include <stdio.h>

int main() {
    int a[10] = {1, 1, 2, 3, 4, 1, 2, 3, 1, 6};
    int n = 10;

    printf("Duplicate numbers and their counts:\n");

    for (int i = 0; i < n; i++) {
        int count = 1;

    
        if (a[i] == -1)
            continue;

        for (int j = i + 1; j < n; j++) {
            if (a[i] == a[j]) {
                count++;
                a[j] = -1; 
            }
        }

        if (count > 1) {
            printf("%d : %d times\n", a[i], count);
        }
    }

    return 0;
}