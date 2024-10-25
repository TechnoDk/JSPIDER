public class Employ {
    static String comp_name = "ABC PVT.LTD";
    String name;
    int id;
    double salary;

    public static void work() {
        System.out.println("EMploy is working");
    }

    public void read() {
        System.out.println("EMploy is reading");
    }

    public static void main(String[] args) {
        Employ e1 = new Employ();
        Employ e2 = new Employ();
        Employ e3 = new Employ();
        System.out.println("Company Name is: " + Employ.comp_name);
        Employ.work();

        e1.name = "Mohan";
        e1.id = 204;
        e1.salary = 357547.658;

        e2.name = "Sohan";
        e2.id = 234;
        e2.salary = 457547.658;

        e3.name = "Rohan";
        e3.id = 230;
        e3.salary = 450547.658;

        e2.comp_name = "Diamond Company";

        System.out.println("==========Employ1 Details============");
        System.out.println("Object address of e1 is: " + e1);
        System.out.println("Company Name is: " + e1.comp_name);
        System.out.println("Name is: " + e1.name);
        System.out.println("ID is: " + e1.id);
        System.out.println("Salary is: " + e1.salary);
        e1.work();
        e1.read();
        System.out.println("==========Employ2 Details============");
        System.out.println("Object address of e2 is: " + e2);
        System.out.println("Company Name is: " + e2.comp_name);
        System.out.println("Name is: " + e2.name);
        System.out.println("ID is: " + e2.id);
        System.out.println("Salary is: " + e2.salary);
        e2.work();
        e2.read();
        System.out.println("==========Employ3 Details============");
        System.out.println("Object address of e3 is: " + e3);
        System.out.println("Company Name is: " + e3.comp_name);
        System.out.println("Name is: " + e3.name);
        System.out.println("ID is: " + e3.id);
        System.out.println("Salary is: " + e3.salary);
        e3.work();
        e3.read();
    }
}
