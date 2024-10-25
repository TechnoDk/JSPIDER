package OOP.initialization;

public class EmployDriver {
    public static void main(String[] args) {
        Employ e1 = new Employ();
        Employ e2 = new Employ();
        Employ e3 = new Employ();

        e1.setValue("Mohan", 123, 34356.67);
        e2.setValue("Sohan", 120, 30356.67);
        e3.setValue("Rohan", 103, 44356.67);

        e1.getDetails();
        e2.getDetails();
        e3.getDetails();

    }
}
