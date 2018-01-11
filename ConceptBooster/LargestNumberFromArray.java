import java.io.*;
import java.util.*;


public class HelloWorld
{
     public static void main(String []args)
     {
         ArrayList<String> arr=new ArrayList<String>();
          arr.add("54");
        arr.add("546");
        arr.add("548");
        arr.add("60");
        Collections.sort(arr,new Comparator<String>(){
            public int compare(String X,String Y)
            {
                String XY=X+Y;
                String YX=Y+X;
               return ((Integer.parseInt(XY))>(Integer.parseInt(YX))?-1:1);
            }
        });
        for (int i=0;i<arr.size();i++)
        {
            System.out.print(arr.get(i));
        }
     }
}
