public class schoolDriveC {

    public static void main(String[] args) {
        schoolC s1 = new schoolC("B.Tech", 25000, "Sector-3 ,Noida", "Engineering Class");
        ;
        schoolC s2 = new schoolC("B.Com", 20000, "Sector-19,Noida(UP)", "Commerce Class");
        ;
        schoolC s3 = new schoolC("B.Sc", 15000, "Sector-20,Noida(UP)", "Science Class");
        ;

        s1.getDetails();
        s2.getDetails();

        s3.getDetails();

    }
}
