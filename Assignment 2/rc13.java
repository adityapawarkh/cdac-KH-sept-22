class rc9{
public static void main(String args[]){
	int rows=4;

for(int i=0;i<=5;i++)
       {
       
	   for(int s=0;s<(rows-i);s++)
	     {
	       System.out.print(" ");
	      }
		  for(int j=0;j<(i*2-1);j++)
		  {
			System.out.print((char)(j+65));  
			  
		  }
		  System.out.println();
		 
	   }
}
} 




