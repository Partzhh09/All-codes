#include<stdio.h>
#include<string.h>
void main()
{
    char str[]="Hello World";
    char *ptr = strchr(str,'W');
    if (ptr)
    {
        printf("character found at index %d",ptr-str);
    }
    else
    {
        printf("character not found");
    }   
}