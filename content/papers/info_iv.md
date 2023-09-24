---
title: "Identifying Causal Effects in Information Provision Experiments" 
date: 2023-09-20
url: /papers/info_iv
# tags: ["keyword 1","keyword 2"]
author: ["Dylan Balla-Elliott"]
description: "TSLS can underestimate the effects of beliefs on outcomes. I propose an alternative way to estimate average effects in information provision experiments." 
summary: "If people form precise beliefs about things that matter for decision-making and people with precise beliefs update less in response to new information, TSLS will understate the average effect of beliefs on behavior. I propose a alternative estimator and find that average effects are 40% larger than TSLS in an application to beliefs about the gender wage gap."
cover:
    image: "/infoiv-fig.png"
    alt: "Figure 1 from paper"
    relative: false
editPost:
    URL: "https://doi.org/10.48550/arXiv.2309.11387"
    Text: "arXiv"

---

---

##### Download:

- [Paper](https://pdfs.dballaelliott.com/info_iv.pdf)
<!-- - [Online appendix](/appendix.pdf) -->
<!-- - [Code and data](https://github.com/paper_repo) -->

---

##### Abstract:

Information provision experiments are an increasingly popular tool to identify how beliefs causally affect decision-making and behavior. In a simple Bayesian model of belief formation via costly information acquisition, people form precise beliefs when these beliefs are important for their decision-making. The precision of prior beliefs controls how much their beliefs shift when they are shown new information (i.e., the strength of the first stage). Since two-stage least squares (TSLS) targets a weighted average with weights proportional to the strength of the first stage, TSLS will overweight individuals with smaller causal effects and underweight those with larger effects, thus understating the average partial effect of beliefs on behavior. In experimental designs where all participants are exposed to new information, Bayesian updating implies that a control function can be used to identify the (unweighted) average partial effect. I apply this estimator to a recent study of the effects of beliefs about the gender wage gap on support for public policies (Settele, 2022) and find the average partial effect is 40% larger than the comparable TSLS estimate. This difference can be explained by the fact that the effects of beliefs are close to zero for people who update their beliefs the most and receive the most weight in TSLS specifications.

---

##### Figure 1. TSLS Estimates Understate the Average Effect of Beliefs

![](/infoiv-fig.png)

---

##### Citation

Dylan Balla-Elliott. 2023. "Identifying Causal Effects in Information Provision Experiments." https://doi.org/10.48550/arXiv.2309.11387.


