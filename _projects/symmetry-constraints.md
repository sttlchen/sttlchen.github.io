---
title: "Learning Under Symmetry Constraints"
collection: projects
type: "Course Project"
course: "COMPSCI 675D / ECE 685D: Introduction to Deep Learning"
permalink: /projects/symmetry-constraints/
date: 2024-12-01
excerpt: "Studies equivariant linear factor models and autoencoders under orthogonal symmetry, with applications to D4-equivariant autoencoders on MNIST."
---

- **Course:** COMPSCI 675D / ECE 685D: Introduction to Deep Learning
- **Methods:** Linear factor models, autoencoders, orthogonal group actions, Reynolds averaging, equivariance, D4 symmetry, MNIST classification

This project studies linear factor models and autoencoders under orthogonal symmetry constraints. Part 1 derives sufficient conditions for equivariance, characterizes when a matrix can be equivariant with respect to every orthogonal change of coordinates, and gives a Reynolds-averaging algorithm for cyclic generators. Part 2 specializes to the dihedral group D4 acting on 28×28 MNIST images, constructs an exactly D4-equivariant linear paired autoencoder via the Reynolds operator, and proposes an approximately equivariant nonlinear autoencoder trained with an equivariance regularizer. The models are compared against a baseline MLP on rotated and reflected MNIST.

- [Report PDF](/files/ECE685_Report.pdf)
