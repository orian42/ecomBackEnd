const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      order: ['category_name'],
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    console.error('Error retrieving category:', error);
    res.status(500).json({ error: 'Failed to retrieve requested category' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updCategory = await Category.update({
      category_name: req.body.category_name,
    },
      {
        where: {
          id: req.params.id,
        }
      });
    console.log('Category successfully updated');
    res.status(200).json(updCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    console.log('Category successfully deleted');
    res.status(200).json(delCategory);
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;
