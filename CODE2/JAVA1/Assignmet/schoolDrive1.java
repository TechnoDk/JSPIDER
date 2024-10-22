public class schoolDrive1 {

    public static void main(String[] args) {
        school1 s1 = new school1();
        school1 s2 = new school1();
        school1 s3 = new school1();

        s1.setValue("B.Tech", 25000, "Sector-3 ,Noida", "Engineering Class");

        s2.setValue("B.Com", 20000, "Sector-19,Noida(UP)", "Commerce Class");
        s2.getDetails();
        s3.setValue("B.Sc", 15000, "Sector-20,Noida(UP)", "Science Class");
        s3.getDetails();

    }
}
