# 🧠 Dynamic Homoscedastic Multi-Task Loss Weighting for Large Connectome Models

## 📋 Project Summary

An architectural refinement for the Brain-Environment Cross Attention (BECA) framework. This project introduces Dynamic Homoscedastic Multi-Task Loss Weighting (Kendall et al., CVPR 2018) to dynamically learn task-uncertainty parameters during backpropagation. It eliminates manual hyperparameter tuning, automatically balances task gradients across multi-site fMRI datasets, and improves model generalization for disease classification, sex classification, and age regression tasks.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                  |
| :----------- | :-------------------------------------------- |
| **Framework**| PyTorch                                       |
| **Domain**   | Brain Connectome (fMRI), Graph Neural Networks|
| **Optimization**| Multi-Task Learning, Homoscedastic Uncertainty|

---

## 🌟 Key Features

- **Dynamic Gradient Balancing**: Assigns a learnable noise variance parameter to each task, dynamically weighting losses based on task uncertainty.
- **Zero Manual Tuning**: Eliminates heuristic static weight tuning across multi-dataset pretraining scripts.
- **Improved Generalization**: Prevents regression loss from suppressing disease classification performance.
- **Low Effort & High Reliability**: Implemented with minimal code changes (under 25 lines) and zero computational latency overhead.

---

## 📸 Screenshots & Diagrams

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `architecture_flow.png` | Workflow of the proposed Dynamic Homoscedastic Multi-Task Loss Weighting system |
| 2 | `code_comparison.png` | Comparison between static manual weighting and dynamic uncertainty weighting |

---

## 🎯 What I Did

- Identified and diagnosed gradient dominance issues caused by static manual loss weighting in the existing BECA repository.
- Formulated and implemented a dynamic homoscedastic multi-task objective function in PyTorch.
- Designed a solution that adapts to dataset heterogeneity (varying noise levels across ADNI, PPMI, ABIDE, HCPA).
- Authored a comprehensive research proposal detailing the mathematical formulation, intuition, and expected benefits.
