---
title: "Home"
description: "I'm a PhD candidate at UChicago Econ, and my research interests are in labor and applied econometrics."
---

## Research

<ul class="papers">

<li class="paper">
<div class="paper-title"><a href="https://pdfs.dballaelliott.com/info_iv.pdf">Identifying Causal Effects in Information Provision Experiments</a></div>
<span class="paper-venue"><em>Revise and Resubmit, Review of Economics and Statistics</em></span>
<span class="paper-links"><a class="abs-toggle" href="#" onclick="this.closest('.paper').querySelector('details').toggleAttribute('open');return false">[abstract]</a> <a href="https://pdfs.dballaelliott.com/info_iv.pdf">[pdf]</a> <a href="https://doi.org/10.48550/arXiv.2309.11387">[arXiv]</a> <a href="https://dballaelliott.github.io/lls/">[package]</a> <a href="https://github.com/dballaelliott/lls">[github]</a></span>
<details class="paper-abs"><summary hidden></summary><div class="abs">
Standard estimators in information provision experiments place more weight on individuals who update their beliefs more in response to new information.
This paper shows that, in practice, these individuals who update the most have the weakest causal effects of beliefs on outcomes.
Standard estimators therefore understate these causal effects.
I propose an alternative local least squares (LLS) estimator that recovers a representative unweighted average effect in a broad class of learning rate models that generalize Bayesian updating.
In five of six recent studies, estimates of the effects of beliefs on outcomes increase. In two, they more than double.
</div></details>
</li>

<li class="paper">
<div class="paper-title"><a href="https://pdfs.dballaelliott.com/ccdid.pdf">Cohort-Chained DiD: Long-Run Effects with Limited Pre-Treatment Data</a></div>
<span class="paper-meta">with <a href="https://isaacnorwich.com">Isaac Norwich</a></span>
<span class="paper-links"><a class="abs-toggle" href="#" onclick="this.closest('.paper').querySelector('details').toggleAttribute('open');return false">[abstract]</a> <a href="https://pdfs.dballaelliott.com/ccdid.pdf">[pdf]</a></span>
<details class="paper-abs"><summary hidden></summary><div class="abs">
Heterogeneity robust difference-in-differences methods typically require control units that remain untreated throughout the entire post-treatment window. This prevents the identification of long-run effects when researchers observe fewer pre-treatment periods than post-treatment periods. We show that cohort-stacked estimators identify long-run effects by chaining together successive not-yet-treated controls. This approach uses overlapping cohorts to extend identification under standard common trends assumptions. We apply this to the earnings effects of parenthood. In a setting where direct methods identify effects only four years post-birth, chaining extends identification to eight years.
</div></details>
</li>

<li class="paper">
<div class="paper-title"><a href="https://pdfs.dballaelliott.com/jpam_reopening.pdf">Determinants of Small Business Reopening Decisions After COVID Restrictions Were Lifted</a></div>
<span class="paper-meta">with Zoë B. Cullen, Edward L. Glaeser, Michael Luca, and Christopher Stanton</span>
<span class="paper-venue"><em>Journal of Policy Analysis and Management</em>, 2022</span>
<span class="paper-links"><a class="abs-toggle" href="#" onclick="this.closest('.paper').querySelector('details').toggleAttribute('open');return false">[abstract]</a> <a href="https://pdfs.dballaelliott.com/jpam_reopening.pdf">[pdf]</a> <a href="https://doi.org/10.1002/pam.22355">[journal]</a></span>
<details class="paper-abs"><summary hidden></summary><div class="abs">
The COVID-19 pandemic led to dramatic economic disruptions, including government-imposed restrictions that temporarily shuttered millions of American businesses. We use a nationwide survey of thousands of small business owners to establish three main facts about business owners' decisions to reopen at the end of the lockdowns. First, roughly 60 percent of firms planned to reopen within days of the end of legal restrictions, suggesting that the lockdowns were generally binding for businesses—although nearly 30 percent expected to delay their reopening by at least a month. Second, decisions to delay reopenings did not seem to be driven by concerns about employee or customer health; even businesses in high-proximity sectors with the highest health risks generally reported intentions to reopen as soon as regulations allowed. Third, pessimistic demand projections primarily explain delays among firms that could legally reopen. Owners expected demand to be one-third lower than before the crisis throughout the pandemic. Using experimentally induced shocks to perceived demand, we find that a 10 percent decline in expected demand results in a 1.5 percentage point (8 percent) increase in the likelihood that firms expected to remain closed for at least one month after being legally able to open. We use follow-up surveys to cross-validate expectations with realized outcomes. Overall, our results suggest that governments set more stringent guidelines for reopening than what many businesses would have selected, suggesting that governments may have internalized costs of contagion that businesses did not.
</div></details>
</li>

</ul>

## Code

<p class="code-desc"><a href="https://dballaelliott.github.io/lls/"><code>lls</code></a>: Implements the estimator in <em>Identifying Causal Effects in Information Provision Experiments.</em> See the <a href="https://dballaelliott.github.io/lls/articles/Intro-to-LLS.html">User's Guide</a> to get started.</p>
