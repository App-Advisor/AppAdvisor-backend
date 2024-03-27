const express = require("express");
const router = express.Router();
const outils = require("../Controllers/outilsController");

/**
 * @swagger
 * /outils:
 *   get:
 *     summary: Liste tous les outils
 *     tags: [Outils]
 *     responses:
 *       200:
 *         description: Une liste de tous les outils
 */
router.get("/" , outils.getManyOutils);

/**
 * @swagger
 * /outils/{id}:
 *   get:
 *     summary: Obtient un outil par son ID
 *     tags: [Outils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'outil à obtenir
 *     responses:
 *       200:
 *         description: Un outil spécifique
 */
router.get("/:id" , outils.getByIdOutils); 

/**
 * @swagger
 * /outils:
 *   post:
 *     summary: Ajoute un nouvel outil
 *     tags: [Outils]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *              description:
 *                  type: string
 *              imageURL:
 *                  type: string
 *              avis:
 *                  type: string
 *              categories:
 *                  type: string
 *     responses:
 *       200:
 *         description: L'outil a été créé
 */
router.post("/" , outils.postOutils); 

/**
 * @swagger
 * /outils/{id}:
 *   put:
 *     summary: Modifie un outil existant par son ID
 *     tags: [Outils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'outil à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *              description:
 *                  type: string
 *              imageURL:
 *                  type: string
 *              avis:
 *                  type: string
 *              categories:
 *                  type: string
 *     responses:
 *       200:
 *         description: L'outil a été mis à jour
 */
router.put("/:id" , outils.putOutilsById); 

/**
 * @swagger
 * /outils/{id}:
 *   delete:
 *     summary: Supprime un outil par son ID
 *     tags: [Outils]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'outil à supprimer
 *     responses:
 *       200:
 *         description: L'outil a été supprimé
 */
router.delete("/:id" , outils.deleteByIdOutils);

module.exports = router ;