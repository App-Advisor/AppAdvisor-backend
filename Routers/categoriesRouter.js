const express = require("express")
const router = express.Router() ;
const categories = require ("../Controllers/categoriesController")

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Liste toutes les catégories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Une liste de toutes les catégories
 */
router.get("/" , categories.getManyCategories); 

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Obtient une catégorie par son ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la catégorie à obtenir
 *     responses:
 *       200:
 *         description: Une catégorie spécifique
 */
router.get("/:id" , categories.getByIdCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Ajoute une nouvelle catégorie
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               name:
 *                  type: string
 *               imageURL:
 *                  type: string
 *               outils:
 *                 type: string
 *     responses:
 *       200:
 *         description: La catégorie a été créée
 */
router.post("/" , categories.postCategories);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Modifie une catégorie existante par son ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la catégorie à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               name:
 *                  type: string
 *               imageURL:
 *                  type: string
 *               outils:
 *                 type: string
 *     responses:
 *       200:
 *         description: La catégorie a été mise à jour
 */
router.put("/:id" , categories.putCategoriesById); 

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprime une catégorie par son ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la catégorie à supprimer
 *     responses:
 *       200:
 *         description: La catégorie a été supprimée
 */
router.delete("/:id" , categories.deleteByIdCategories);

module.exports = router ; 