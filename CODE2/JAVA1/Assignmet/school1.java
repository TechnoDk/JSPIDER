public class school1 {

    String Name = "Diamond School ,Noida";
    String Course;
    int Fee;
    String Loc;
    String Details;

    public void setValue(String c, int f, String l, String d) {
        // name = n;
        Course = c;
        Fee = f;
        Loc = l;
        Details = d;

    }

    public void getDetails() {
        System.out.println("Name is:-" + Name);
        System.out.println("Course is :-" + Course);
        System.out.println("Fee is:-" + Fee);
        System.out.println("Loc is :-" + Loc);
        System.out.println("Details :-" + Details);
        System.out.println("==============");
    }
}
