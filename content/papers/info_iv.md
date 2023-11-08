---
title: "Identifying Causal Effects in Information Provision Experiments" 
date: 2023-11-08
url: /papers/info_iv
# tags: ["keyword 1","keyword 2"]
author: ["Dylan Balla-Elliott"]
description: "TSLS can underestimate the effects of beliefs on outcomes. I propose an alternative way to estimate belief effects in information provision experiments." 
summary: "If people form precise beliefs about things that matter for decision-making and then update beliefs less in response to new information, TSLS will understate the average effect of beliefs on behavior. I propose an alternative estimator and apply it to the gender gap."
cover:
    image: "/infoiv-fig.png"
    alt: "Figure 2 from paper"
    relative: false
editPost:
    URL: "https://doi.org/10.48550/arXiv.2309.11387"
    Text: "arXiv"

---

---

##### Download:

- [Paper](https://pdfs.dballaelliott.com/info_iv.pdf)
<!-- - [Online appendix](/appendix.pdf) -->
- *Code available upon request*

---

##### Abstract:

Information provision experiments are a popular way to study causal effects of beliefs on behavior. Researchers estimate these effects using TSLS. I show that existing TSLS specifications do not estimate the average partial effect; they have weights proportional to belief updating in the first-stage. If people whose decisions depend on their beliefs gather information before the experiment, the information treatment may shift beliefs more for people with weak belief effects. This attenuates TSLS estimates. I propose researchers use a local-least-squares (LLS) estimator that I show consistently estimates the average partial effect (APE) under Bayesian updating, and apply it to Settele (2022).


---

##### Figure 2. LLS Estimates of the Average Partial Effect are 70% Larger than TSLS

![](/infoiv-fig.png)

---

##### Citation

Dylan Balla-Elliott (2023). "Identifying Causal Effects in Information Provision Experiments." https://doi.org/10.48550/arXiv.2309.11387.


