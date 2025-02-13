#include<stdio.h>

int main()
{
    int arr [3] [3] = {1,2,3,4,5,6,7,8,9};
    printf("Print array sum: \n");

    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d \t", arr[i][j]);
            sum += arr[i][j];
        }
        printf("\n");
    }
    printf("Sum of Element: %d\n", sum);
    return 0;
}

// #include <stdio.h>
// void main()
// {
//     int size;
//     printf("Enter the array of size :");
//     scanf("%d",&size);

//     int arr[size];
//     printf("Enter the value of Array element : \n");

//     for (int i = 0; i < size; i++)
//     {
//         scanf("%d",&arr[i]);
//     }
//     int min = arr[0];
//     int max = arr[0];
//     for (int i = 1; i < size; i++)
//     {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     printf("Minimum value in the array: %d\n", min);
//     printf("Maximum value in the array: %d\n", max);
// }

// #include <stdio.h>
// void main()
// {
//     int arr[5];
//     printf("Enter the value of Array element :");
//     scanf("%d",&arr);
//     int min = arr[5];
//     for (int i = 0; i <= 4; i++)
//     {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     printf("Minimum value in the array: %d\n", min);
// }

// #include <stdio.h>
// void main()
// {
//     int size;
//     printf("Enter the array of size :");
//     scanf("%d",&size);

//     int arr[size];
//     printf("Enter the value of Array element : \n");

//     for (int i = 0; i < size; i++)
//     {
//         scanf("%d",&arr[i]);
//     }
//     int min = arr[0];
//     for (int i = 1; i < size; i++)
//     {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
    
//     printf("Minimum value in the array: %d\n", min);
// }

// #include <stdio.h>

// int main() {
//     int arr[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
//     printf("Print array elements: \n");

//     int sum = 0;

//     for (int i = 0; i < 9; i++) {
//         printf("%d \t", arr[i]);
//         sum += arr[i];

//         if ((i + 1) % 3 == 0) {
//             printf("\n");
//         }
//     }

//     printf("Sum of elements: %d\n", sum);
//     return 0;
// }