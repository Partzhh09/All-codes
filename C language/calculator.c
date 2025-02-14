#include <stdio.h>
#include<math.h>
int main() {
    char op;
    int long a, b, summ;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &op);

   
    printf("Enter two operands: ");
    scanf("%d", &a);
    printf("Enter two operands: ");
    scanf("%d", &b);
    
    switch (op) {
    case '+':
        summ = a + b;
        printf(" -> %d",summ);
        break;
    case '-':
        summ = a - b;
        printf(" -> %d",summ);
        break;
    case '*':
        summ = a * b;
        printf(" -> %d",summ);
        break;
    case '/':
        summ = a / b;
        printf(" -> %d",summ);
        break;
    default:
        printf("Error! Incorrect Operator Value\n");
    }

    return 0;
}