import os


def run():
    # Github action are available as environment with prefix INPUT_
    bucket = os.environ["INPUT_BUCKET"]
    region = os.environ["INPUT_REGION"]
    dist_folder = os.environ["INPUT_DIST-FOLDER"]
    deployed_url = f"https://{bucket}.s3.{region}.amazonaws.com/"

    print("Deploying application to S3...")
    print(
        f"Deployment from folder: {dist_folder} to bucket: {bucket} in region: {region}"
    )

    with open(os.environ["GITHUB_OUTPUT"], "a") as f:
        f.write(f"deployed-url={deployed_url}\n")


if __name__ == "__main__":
    run()
