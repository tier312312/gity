public class StringSplit {
    public static void main(String[] args) {
        String str = "apple,banana,orange";
        String[] fruits = str.split(",");
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
