import java.util.Scanner;

class rc28
{
    public static void main(String[] args)
    {
        
        Scanner scanner = new Scanner(System.in);

        
        System.out.println("Enter the number of rows needed to print the pattern ");

        int rows = scanner.nextInt();
        System.out.println("Printing the pattern");
        
        for (int i = 1; i <= rows; i++)
        {
            for (int j = rows-1; j>=i; j--)
            {
                System.out.print(" ");
            }
            // Print star in decreasing order
            for (int k = 1; k <= rows; k++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        scanner.close();
    }
}