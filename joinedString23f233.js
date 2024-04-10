public class StringJoinExample {
    public static void main(String[] args) {
        String[] words = {"Hello", "World", "Java"};
        String joinedString = String.join(" ", words);
        System.out.println("Joined string: " + joinedString);
    }
}
