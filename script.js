
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Check if the clicked question is already open
        const isActive = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector(".icon").textContent = "+";
        });

        // Open the clicked question if it was closed
        if (!isActive) {
            item.classList.add("active");
            item.querySelector(".icon").textContent = "−";
        }
    });
});
