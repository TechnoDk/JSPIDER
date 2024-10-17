public class schoolDrive {
    public static void main(String[] args) {
        school s1 = new school();
        s1.cult();
        s1.name = "Qspider";
        s1.course = "Java Development";
        s1.fee = 30000;
        s1.no_teacher = 20;
        s1.no_student = 1000;
        s1.loc = "Noida";
        s1.details = "Training under Different programming lang.";
        System.out.println(s1.name);
        System.out.println(s1.course);
        System.out.println(s1.fee);
        System.out.println(s1.no_teacher);
        System.out.println(s1.no_student);
        System.out.println(s1.loc);
        System.out.println(s1.details);

    }
}
