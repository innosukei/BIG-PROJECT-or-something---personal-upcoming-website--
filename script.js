function showCategory(categoryId) {
    const allCategories = document.querySelectorAll('.categorial_content');
    allCategories.forEach(category => category.classList.remove('active'));
    const category = document.getElementById(categoryId)
    category.classList.add('active');
}