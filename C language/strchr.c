#include<stdio.h>
#include<string.h>

void countvowel(char str[100]);
void main(){
    char str[100];
    printf("Enter a String To Count The No Of Vowels :");
    fgets(str,100,stdin);
    countvowel(str);
}
void countvowel(char str[100]){
    char vowel[] = "aeiouAEIOU";
    int count = 0;
    while (*str != '\0')
    {
        if (strchr(vowel,*str))
        {
            count++;
        }
        str++;
    }
    printf("No. of Present in The string %d",count);
}