"""Reproduce the blog's synthetic forecast scoring example (Python 3, stdlib only).
Download forecast-example.csv into the same folder; run: python forecast_mae.py
The values are illustrative predictions, not outputs from a trained model.
"""
import csv
from pathlib import Path
from statistics import mean

with Path(__file__).with_name("forecast-example.csv").open(newline="", encoding="utf-8") as source:
    rows = list(csv.DictReader(source))
for column in ("baseline_kw", "candidate_kw"):
    mae = mean(abs(float(row["actual_kw"]) - float(row[column])) for row in rows)
    print(f"{column}: MAE = {mae:.2f} kW")
