public class student {

    public static void main(String[] args) {
        // System.out.println(s1.work());
        student1 s1 = new student1();

        System.out.println(s1);
        s1.work();
        s1.name = "deepak";
        s1.Id = "12";
        s1.rollno = 102;
        s1.Phone = 1245789603;
        s1.stream = "CSE";
        s1.Emailid = "mksh@gmail.com";
        System.out.println(s1.name);
        System.out.println(s1.Id);
        System.out.println(s1.rollno);
        System.out.println(s1.stream);
        System.out.println(s1.Emailid);
        System.out.println(s1.Phone);

    }
}
