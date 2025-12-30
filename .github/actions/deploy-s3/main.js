const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
    const bucket = core.getInput("bucket", { required: true });
    const region = core.getInput("region", { required: true });
    const distFolder = core.getInput("dist-folder", { required: true });
    const deployedUrl = `https://${bucket}.s3.${region}.amazonaws.com/`;

    core.notice("Starting deployment to S3...");
    exec.exec(`echo aws s3 sync ${distFolder} s3://${bucket} --region ${region} --delete`)

    core.setOutput("deployed-url", deployedUrl);
    core.notice(`Deployment completed! Application is available at: ${deployedUrl}`);
}

run();
