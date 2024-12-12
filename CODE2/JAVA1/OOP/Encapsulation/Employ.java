import java.util.Scanner;

public class Employ {
    
    private int pin=2331;
    private String name;
    private int id;
    private double salary;

    //  Scanner sc = new Scanner(System.in);
    //     System.out.println("Enter your pin");
    //     int userpin = sc.nextInt();
    //     if (pin==userpin) {
    //         System.out.println("validation successful");
    //         return name;
    //     }
    

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;

    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

   
    // public int getPin() {
    //     return pin;
    // }

    public String getName() {
        //validation
        return name;

    }

    public int getId() {
        return id;

    }

    public double getSalary() {
        return salary;
    }

}
