public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick";
        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        String cleanedInput = input.replaceAll(" ", "").toLowerCase();
        boolean[] isLetterPresent = new boolean[26];
        for (int i = 0; i < cleanedInput.length(); i++) {
            char c = cleanedInput.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                isLetterPresent[index] = true;
            }
        }
        for (boolean present : isLetterPresent) {
            if (!present) {
                return false;
            }
        }
        return true;
    }
}
