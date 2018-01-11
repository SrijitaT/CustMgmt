import java.io.*;
import java.util.*;
import java.util.Map.Entry;
class Counter
{
    char ch;
    int count;
    int pos;
    Counter(int index)
    {
        count=1;
        pos=index;
    }
    Counter(char ch,int count,int index)
    {
        this.count=count;
        this.ch=ch;
        this.pos=index;
    }
    public void incCount(int index)
    {
        count++;pos=index;
    }
   
}
public class HelloWorld
{
     public static void main(String []args) throws IOException
     {
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
       ArrayList<Counter> arr=new ArrayList<Counter>();
       for(Map.Entry<Character,Counter> m:hm.entrySet())
       { 
          if(m.getValue().count==1)
           arr.add(new Counter(m.getKey(),m.getValue().count,m.getValue().pos));
  /* System.out.println(m.getKey()+"-"+m.getValue().count+"-"+m.getValue().pos);
          */
      }
  Collections.sort(arr,new Comparator<Counter>(){
      public int compare(Counter c1,Counter c2)
    {
       return c1.pos>c2.pos?1:-1;
    }
  });
    Counter cnt=arr.get(0);
   System.out.println(cnt.ch+" "+cnt.count+" "+cnt.pos);
 
     }
}
