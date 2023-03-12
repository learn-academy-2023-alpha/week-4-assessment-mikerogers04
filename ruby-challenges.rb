# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd(number)            #define a method called even_odd, passing in a number
    if number.even?             #Conditional if checking if the variable is even using .even? notation instead of using modulo
        "#{number} is even."    #Ruby string interpolation
    else                        #Catch-all else statement for any number that is not even
        "#{number} is odd."     #Ruby string interpolation
    end                         #End if/else conditionals
end                             #End even_odd method

#Printing test varaiables to confirm method working properly.
p even_odd(num1) #"7 is odd."
p even_odd(num2) #"42 is even."
p even_odd(num3) #"221 is odd."

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
test_words = "EequAls pArAAmEters"
# Expected output: 'qls prmtrs'

def delete_vowels(string)       #define a method called delete_vowels, passing in a string 
    string.delete "aeiouAEIOU"  #Using built-in method .delete, passing in a string of lower and uppercase letters as the argument. .delete will ignore the blank spaces in test variable strings. Back to back vowels and back to back uppercase then lowercase vowels will be deleted. 
end                             #End delete_vowels method

#Printing test varaiables to confirm method working properly.
p delete_vowels(beatles_album1) #"Rbbr Sl"
p delete_vowels(beatles_album2) #"Sgt Pppr"
p delete_vowels(beatles_album3) #"bby Rd"
p delete_vowels(test_words) #"qls prmtrs"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
#Test variable for uppercase letter at end of word
palindrome_tester4 = 'RacecaR'
# Expected output: 'RacecaR is a palindrome'

def palindrome(string)                              #define a method called palindrom, passing in a string
    if string.downcase == string.reverse.downcase   #If conditional for if the string input downcased is equal to the string input reversed and downcased
        "#{string} is a palindrome."                #Ruby string interpolation
    else                                            #Catch-all else for any string that is not a palindrome
        "#{string} is not a palindrome"             #Ruby string interpolation
    end                                             #End if/else conditionals
end                                                 #End palindrome method 

#Printing test varaiables to confirm method working properly.
p palindrome(palindrome_tester1) #"Racecar is a palindrome."
p palindrome(palindrome_tester2) #"LEARN is not a palindrome"
p palindrome(palindrome_tester3) #"Rotator is a palindrome."
p palindrome(palindrome_tester4) #"RacecaR is a palindrome."
