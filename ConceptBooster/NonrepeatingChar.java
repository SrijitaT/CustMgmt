import java.io.*;
import java.util.*;
class Counter
{
    int count;
    int pos;
    Counter(int index)
    {
        count=1;
        pos=index;
    }
    public void incCount(int index)
    {
        count++;pos=index;
    }
   
}
public class HelloWorld{

     public static void main(String []args) throws IOException
     {
          /*System.out.println("Enter the Word:");
         BufferedReader br=
         new BufferedReader(new InputStreamReader(System.in));*/
         String word="geeksforgeeks";
         int length=word.length();
         char key='\0';
         int i;int min=Integer.MAX_VALUE;
       HashMap <Character,Counter> hm=new HashMap<Character,Counter>();
       for(i=0;i<length;i++)
       {
           if(hm.containsKey(word.charAt(i)))
           {
               hm.get(word.charAt(i)).incCount(i+1);
           }
           else
           {
           hm.put(word.charAt(i),new Counter(i+1));
           }
       }
       for(Map.Entry<Character,Counter> m:hm.entrySet()){ 
           if(m.getValue().count==1 && min>m.getValue().pos)
           {
               min=m.getValue().pos;
               key=m.getKey();
           }
   /*System.out.println(m.getKey()+"-"+m.getValue().count+"-"+m.getValue().pos); */
  }
   System.out.println(key+":"+min);
       
     }
}
