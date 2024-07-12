const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // Associated Product data included
  try {
    const tagData = await Tag.findAll({
      order: ['id'],
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (error) {
    console.error('Error retrieving tags:', error);
    res.status(500).json({ error: 'Failed to retrieve tags' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // Associated Product data included
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (error) {
    console.error('Error retrieving tag:', error);
    res.status(500).json({ error: 'Failed to retrieve requested tag' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (error) {
    console.error('Error creating tag:', error);
    res.status(500).json({ error: 'Failed to create tag' });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updTag = await Tag.update({
      tag_name: req.body.tag_name,
    },
      {
        where: {
          id: req.params.id,
        }
      });
    console.log('Tag successfully updated!');
    res.status(200).json(updTag);
  } catch (error) {
    console.error('Error updating tag:', error);
    res.status(500).json({ error: 'Failed to update tag' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy({
        where: {
          id: req.params.id,
        }
      });
    console.log('Tag successfully deleted!');
    res.status(200).json(delTag);
  } catch (error) {
    console.error('Error deleting tag:', error);
    res.status(500).json({ error: 'Failed to delete tag' });
  }
});

module.exports = router;
